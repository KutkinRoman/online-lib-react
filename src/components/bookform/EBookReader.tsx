import React, {useEffect, useState} from "react";
import "./styles.css";
import {EpubViewStyle, IEpubViewStyle, IReactReaderStyle, ReactReader, ReactReaderStyle} from "react-reader";
import {OrderService} from "../../data/services/OrderService";
import {Alert, LinearProgress} from "@mui/material";

const customReactReaderStyle: IReactReaderStyle = {
    ...ReactReaderStyle,
    arrow: {
        ...ReactReaderStyle.arrow,
        color: '#0F76B0',
    },
};

const customIEpubViewStyle: IEpubViewStyle = {
    ...EpubViewStyle,
    view: {
        ...EpubViewStyle.view,
        background: 'rgb(255, 255, 255)'
    },
    viewHolder: {
        ...EpubViewStyle.viewHolder,
        background: 'rgb(255, 255, 255)'
    }
}

interface EBookReaderProps {
    url: string
    bookId: string
}

const EBookReader = ({url, bookId}: EBookReaderProps) => {

    const [isLoading, setIsLoading] = useState(true)
    const [isInit, setIsInit] = useState(false)
    const [location, setLocation] = useState<any>()

    const locationChanged = (epubcfi: any) => {
        OrderService.saveEpubConfigByBookId(bookId, epubcfi)
        setLocation(epubcfi)
    }

    useEffect(() => {
        const initLocation = async () => {
            try {
                const response = await OrderService.getEpubConfigByBookId(bookId)
                if (response.data && response.data.startsWith('epubcfi')) setLocation(response.data)
            } catch (e) {
                console.log(e)
            } finally {
                setIsInit(true)
                setIsLoading(false)
            }
        }
        initLocation()
    }, [])

    return (
        <div style={{position: "relative", height: "100vh"}}>
            {isLoading &&
                <LinearProgress />
            }
            {isInit &&
                <ReactReader
                    location={location}
                    locationChanged={locationChanged}
                    url={url}
                    readerStyles={customReactReaderStyle}
                    epubViewStyles={customIEpubViewStyle}
                />
            }
        </div>
    );
}

export default EBookReader;