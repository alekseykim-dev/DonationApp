import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      name: 'Caffe Luxe',
      description: `A travel-themed coffee shop where each cup takes you on a flavorful voyage around the world's best coffee regions`,
      image:
        'https://images.unsplash.com/photo-1545418314-7ce0b9b53901?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 1,
      categoryIds: [1, 2],
      price: `40,000`,
      quantity: 21,
      coordinate: {latitude: 37.5665, longitude: 126.978},
    },
    {
      name: 'Espressivo',
      description: `A vibrant spot for early birds, offering energizing brews and an ambiance that kick-starts your day.`,
      image:
        'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 2,
      categoryIds: [1, 3],
      price: '35,000',
      quantity: 0,
      coordinate: {latitude: 37.579617, longitude: 126.977041},
    },
    {
      name: 'Java Jewel',
      description: `An enchanting café that combines the art of brewing with a magical ambiance, perfect for those seeking a serene retreat with their favorite cup.`,
      image:
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 3,
      categoryIds: [4],
      price: '39,000',
      quantity: 61,
      coordinate: {latitude: 37.551169, longitude: 126.988227},
    },
    {
      name: 'Aromatica',
      description: `This luxurious coffee house offers an opulent setting and premium blends, catering to those who enjoy the finer things in life alongside their espresso.`,
      image:
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 4,
      categoryIds: [1, 5],
      price: '43,000',
      quantity: 0,
      coordinate: {latitude: 37.582889, longitude: 126.983611},
    },
    {
      name: 'Brewtopia',
      description: `A grand and historical coffee shop renowned for its expertly crafted espressos and a wide selection of coffee-related merchandise.`,
      image:
        'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 5,
      categoryIds: [6, 3],
      price: '44,000',
      quantity: 0,
      coordinate: {latitude: 37.566836, longitude: 127.008912},
    },
    {
      name: 'Nirvana',
      description: `A utopian café where the love for coffee meets perfection in every cup, creating an ideal experience for every coffee lover.`,
      image:
        'https://images.unsplash.com/photo-1518288319310-99bc48891084?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 6,
      categoryIds: [7],
      price: '56,000',
      quantity: 0,
      coordinate: {latitude: 37.512672, longitude: 127.102543},
    },
    {
      name: 'Eclipse',
      description:
        'A creatively inspired café where coffee is not just a drink but an art form, each cup a masterpiece of flavor and presentation.',
      image:
        'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 7,
      categoryIds: [8],
      price: '21,500',
      quantity: 0,
      coordinate: {latitude: 37.563656, longitude: 126.985022},
    },
    {
      name: 'Ivory',
      description:
        'Specializing in handcrafted coffee with an emphasis on aromatic blends, this shop is a haven for those who appreciate the subtleties of coffee aromas.',
      image:
        'https://images.unsplash.com/photo-1529022805552-1c88a713c1c5?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 8,
      categoryIds: [1, 9],
      price: '53,000',
      quantity: 0,
      coordinate: {latitude: 37.574368, longitude: 126.983612},
    },
    {
      name: 'Coco Java',
      description:
        'An elegant café that specializes in vanilla-infused coffee creations, offering a smooth, velvety escape with every cup.',
      image:
        'https://images.unsplash.com/photo-1491931648265-8f68c1dc731b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 9,
      categoryIds: [10],
      price: '78,000',
      quantity: 26,
      coordinate: {latitude: 37.569757, longitude: 126.977036},
    },
    {
      name: 'Whisper',
      description:
        'A cozy retreat where coffee and chocolate blends are served in a cloud-like, dreamy atmosphere, perfect for relaxing afternoons.',
      image:
        'https://images.unsplash.com/photo-1595475038705-1af15f928681?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 10,
      categoryIds: [11],
      price: '32,000',
      quantity: 0,
      coordinate: {latitude: 37.509621, longitude: 126.99588},
    },
    {
      name: 'Rhapsody',
      description:
        ' A majestic coffee shop with a regal ambiance, where every coffee drink is served with a touch of royalty and sophistication.',
      image:
        'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 11,
      categoryIds: [1, 12],
      price: '43,000',
      quantity: 21,
      coordinate: {latitude: 37.529722, longitude: 126.934444},
    },
    {
      name: 'Zephyr',
      description:
        'A mystical coffee haven where each espresso shot is brewed to be an elixir, rejuvenating the spirit and enlivening the senses.',
      image:
        'https://images.unsplash.com/photo-1514066637891-498034f5a154?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 12,
      categoryIds: [13],
      price: '29,000',
      quantity: 15,
      coordinate: {latitude: 37.57884, longitude: 126.991019},
    },
    {
      name: 'Rizz Coffee',
      description:
        ' A tranquil oasis where the smoothness of lattes meets the serenity of a lagoon-like ambiance, ideal for peaceful coffee breaks.',
      image:
        'https://images.unsplash.com/photo-1599579138425-dd416121aec3?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 13,
      categoryIds: [2],
      price: '27,000',
      quantity: 25,
      coordinate: {latitude: 37.543072, longitude: 127.041808},
    },
    {
      name: 'Vista',
      description:
        'This fashionable coffee shop blends the world of high fashion with high-quality coffee, offering a chic and stylish coffee experience.',
      image:
        'https://images.unsplash.com/photo-1521494893888-be7d1bf2933d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 14,
      categoryIds: [1, 8],
      price: '38,000',
      quantity: 19,
      coordinate: {latitude: 37.512075, longitude: 127.058745},
    },
    {
      name: 'Seraphina',
      description:
        'An exclusive, boutique-style café that offers a curated selection of gourmet beans, perfect for those seeking a personalized coffee experience.',
      image:
        'https://images.unsplash.com/photo-1527596428171-7885b82c91c6?q=80&w=2501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 15,
      categoryIds: [2],
      price: '33,000',
      quantity: 11,
      coordinate: {latitude: 37.536955, longitude: 126.977016},
    },
    {
      name: 'Talisman',
      description:
        'Offering an intimate and refined setting, this place is perfect for those seeking to indulge in expertly crafted cappuccinos in a quiet, contemplative space.',
      image:
        'https://images.unsplash.com/photo-1527512666523-bb0e4389d842?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 16,
      categoryIds: [4],
      price: '41,500',
      quantity: 0,
      coordinate: {latitude: 37.523867, longitude: 126.980388},
    },
    {
      name: 'Sapphire',
      description:
        'With a theme of nature and tranquility, this café offers a refreshing outdoor setting, where each mocha drink adds to the serene meadow-like atmosphere.',
      image:
        'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 17,
      categoryIds: [1, 5],
      price: '36,000',
      quantity: 16,
      coordinate: {latitude: 37.559078, longitude: 126.977985},
    },
    {
      name: 'Mosaic',
      description:
        'Focused on the art of roasting, this café provides a warm and inviting atmosphere where each roast is carefully crafted for the ultimate coffee experience.',
      image:
        'https://images.unsplash.com/photo-1617590591232-26315f8482cb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 18,
      categoryIds: [10],
      price: '41,000',
      quantity: 35,
      coordinate: {latitude: 37.511211, longitude: 127.098153},
    },
    {
      name: 'Luxe',
      description:
        'A modern escape, this place offers a respite in the midst of the urban jungle, serving rejuvenating espresso shots in a lush, green setting.',
      image:
        'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 19,
      categoryIds: [2, 12],
      price: '43,000',
      quantity: 0,
      coordinate: {latitude: 37.557336, longitude: 126.925207},
    },
    {
      name: 'Pinnacle',
      description:
        'Books for people of all ages, promoting literacy and a love for reading.',
      image:
        'https://images.unsplash.com/photo-1520640811039-d5e14ea82532?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      donationItemId: 20,
      categoryIds: [9],
      price: '47,000',
      quantity: 15,
      coordinate: {latitude: 37.530125, longitude: 126.932911},
    },
  ],
  selectedDonationId: null,
  selectedDonationInformation: {},
};

const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
  },
});

export const {resetDonations, updateSelectedDonationId} = Donations.actions;
export default Donations.reducer;
