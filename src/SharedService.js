import windowSize from "react-window-size";
import React, {Component} from 'react';


class SharedService {
    isMobile() {
        if (this.props.windowWidth < 580) {
            return true
        } else {
            return false;
        }

    }

}

const sharedService = new SharedService()


export default windowSize(sharedService)
