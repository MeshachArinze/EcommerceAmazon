import React, { useState, useEffect, useState} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import LoadingBox from "../components/LoadingBox";
import Axios from "axios";
import { USER_ADDRESS_MAP_CONFIRM } from "../constants/userConstants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const MapScreen = () => {
  return (
    <div>MapScreen</div>
  )
}

export default MapScreen