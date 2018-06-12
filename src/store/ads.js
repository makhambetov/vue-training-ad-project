export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '1'
      },
      {
        title: 'Second ad',
        description: 'Description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '2'
      },
      {
        title: 'Third ad',
        description: 'Description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: '3'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
