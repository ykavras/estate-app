import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Animated
} from "react-native";
import styles from "./styles";
import Back from "../../assets/icons/Back";
import Location from "../../assets/icons/Location";
import Panorama from "../../assets/icons/Panorama";

const HEADER_MAX_HEIGHT = 400;
const HEADER_MIN_HEIGHT = 230;
const IMAGE_MAX_HEIGHT = 230;
const IMAGE_MIN_HEIGHT = 100;
const INFO_HALF = 84;
const INFO_HALF_MIN = 64;
const CONTEXT_MAX_HEIGHT = 480;
const CONTEXT_MIN_HEIGHT = 300;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const { goBack } = this.props.navigation;
    const { scrollY } = this.state;
    const imageWrapper = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const imageBox = scrollY.interpolate({
      inputRange: [0, IMAGE_MAX_HEIGHT - IMAGE_MIN_HEIGHT],
      outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const imageInfoHalf = scrollY.interpolate({
      inputRange: [0, INFO_HALF - INFO_HALF_MIN],
      outputRange: [INFO_HALF, INFO_HALF_MIN],
      extrapolate: 'clamp',
    });
    const contextTop = scrollY.interpolate({
      inputRange: [0, CONTEXT_MAX_HEIGHT - CONTEXT_MIN_HEIGHT],
      outputRange: [CONTEXT_MAX_HEIGHT, CONTEXT_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.backButon} onPress={() => goBack()}>
          <Back style={styles.backIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.openPanorama}>
          <Panorama fill="#616161" style={styles.panoramaIcon} />
        </TouchableOpacity>
        <Animated.View style={[styles.imageBox, { height: imageWrapper }]}>
          <Animated.Image
            style={[
              styles.image,
              { height: imageBox, marginTop: imageInfoHalf }
            ]}
            source={{
              uri:
                "https://i.ya-webdesign.com/images/transparent-building-condo-6.png",
            }}
          />
          <Animated.View style={[styles.info, { marginTop: imageInfoHalf }]}>
            <Text style={styles.name}>Maslak 1453</Text>
            <Text style={styles.category}>Toplu konut</Text>
            <View style={styles.locationBox}>
              <Location style={styles.locationIcon} />
              <Text style={styles.location}>Esenyurt / İstanbul</Text>
            </View>
          </Animated.View>
        </Animated.View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
        >
          <Animated.View style={{ marginTop: contextTop }} />
          <Text style={styles.description}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
          </Text>
          <Text style={styles.description}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
          </Text>
          <Text style={styles.description}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
          </Text>
          <Text style={[styles.description, { paddingBottom: 100 }]}>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.makeOffer}>
          <Text style={styles.makeOfferText}>Teklif İste</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Detail;
