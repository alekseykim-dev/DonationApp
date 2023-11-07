import React from 'react';
import {useSelector} from 'react-redux';
import style from './style';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log(donationItemInformation);
};

export default SingleDonationItem;
