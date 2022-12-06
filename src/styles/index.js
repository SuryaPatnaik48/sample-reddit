import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileContainer: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  detail: {
    fontSize: 16,
    color: '#696969',
    marginTop: 1,
    textAlign: 'left',
  },

  profileAvatar: {
    width: 110,
    height: 110,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
  },

  profileName: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },

  subRedditName: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
  },

  followers: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    textAlign: 'center',
  },

  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },

  marginHorizontal: {
    marginHorizontal: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  simpleText: {
    color: 'white',
  },

  textBoldLight: {
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },

  redditImg: {
    width: 300,
    height: 200,
  },

  padding: {
    padding: 10,
  },

  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#faa307',
    padding: 10,
    borderRadius: 10,
  },
  subRedditCardAvatar: {
    width: 30,
    height: 30,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },

  feedCardView: {
    position: 'relative',
  },

  flexColumn: {
    flexDirection: 'column',
  },

  subRedditTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  second: {
    color: 'black',
    alignItems: 'center',
  },

  third: {
    color: 'black',
    alignItems: 'center',
    marginTop: 10,
  },

  // subRedditThumbnail: {
  //   width: item.data.thumbnail_width * 2,
  //   height: item.data.thumbnail_height * 2,
  //   marginVertical: 10,
  // },
});

export default globalStyles;
