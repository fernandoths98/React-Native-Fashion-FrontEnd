import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import Animated, {
  divide,
  event,
  interpolate,
  interpolateColor,
  multiply,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Slide, SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import {AuthNavigationProps} from "../../components/Navigation";

const Onboarding = ({ navigation }: 
  AuthNavigationProps<"Onboarding">) => {
  // console.log(navigation)
  
  const onScroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    x.value = event.contentOffset.x;
  });

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    );

    return {
      backgroundColor: scale,
    };
  });

  const translateX = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -x.value }],
    };
  });

  // const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, animatedStyles]}>
        <Animated.ScrollView
          ref={onScroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          onScroll={scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject }, animatedStyles]}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) =>(
              <Dot 
              key={index}
              passKey={x} 
              // currentIndex={x.value/width}
              {...{index}} />
            ))}
          </View>
          <Animated.View
            style={[{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              
            }, translateX]}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome")
                      // console.log(navigation)
                    } else {
                      onScroll.current
                      ?.scrollTo(
                        { x: width * (index + 1), 
                          animated: true })
                    }
                  }}
                  {...{ subtitle, description, last}}
                />
              )
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry Find the best outfit here",
    color: "#BFEAF5",
  },

  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
  },

  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
  },

  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },

  footer: {
    flex: 1,
  },

  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },

  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});


export default Onboarding;