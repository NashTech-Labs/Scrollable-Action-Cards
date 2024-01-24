import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';

function EventCard() {
  const bannerData = [
    {
      id: 1,
      image: require('../../assets/resort1.jpg'),
      name: 'Havana Resort',
      location: '23rd Street Havana',
    },
    {
      id: 2,
      image: require('../../assets/resort2.jpg'),
      name: 'Floral Resort',
      location: '16/24 Hall street Havana',
    },
    {
      id: 3,
      image: require('../../assets/resort3.jpg'),
      name: 'Paradise Resort',
      location: 'Mall Road, Phuket',
    },
    {
      id: 4,
      image: require('../../assets/resort4.jpg'),
      name: 'Heaven Paradise',
      location: 'Street 3 Block Road, Phuket',
    },
    {
      id: 5,
      image: require('../../assets/resort5.jpg'),
      name: 'Little Hall Resort',
      location: 'Church Street, Maven Road, Phuket',
    },
  ];

  // Displays Event Cards

  const renderBanner = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card} key={index}>
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode='cover'
          />
          <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{item.location}</Text>
          </View>
          <Pressable style={styles.detailBtn}>
            <Text style={styles.btnText}>View detail</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={bannerData}
        renderItem={renderBanner}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#f0f1f2',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    height: 300,
    width: 250,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#45474D',
    fontWeight: '600',
    paddingLeft: 10,
  },
  nameText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
    paddingLeft: 10
  },
  detailBtn: {
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: '#d6001c',
    marginHorizontal: 10,
    marginVertical: 15,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  btnText: {
    color: '#d6001c',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EventCard;
