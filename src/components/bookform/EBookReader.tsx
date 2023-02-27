import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import {ReactReader, IReactReaderStyle, ReactReaderStyle, IEpubViewStyle, EpubViewStyle} from "react-reader";
// @ts-ignore
import Ebook from "../../assect/ebooktest/bogatyy-papa-bednyy-papa.epub";

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

//const loc = "epubcfi(/6/4[chapter1]!/4/2[chapter1]/8[s3]/6/1:490)";
const loc = null;

const EBookReader = () => {
    const [selections, setSelections] = useState<any[]>([]);
    const renditionRef = useRef<any>(null);

    const [location, setLocation] = useState<any>(loc);
    const locationChanged = (epubcifi: any) => {
        // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
        setLocation(epubcifi);
        console.log(location);
    };

    // setSelections([
    //   {
    //     text:
    //       "In previous generations, people often believed that business transactions were immo",
    //     cfiRange: "epubcfi(/6/4[chapter1]!/4/2[chapter1]/4[s1]/6,/1:0,/1:83)"
    //   }
    // ]);

    useEffect(() => {
        // if (renditionRef.current) {
        //     const setRenderSelection = (cfiRange: any, contents: any) => {
        //         setSelections(
        //             selections.concat({
        //                 text: renditionRef.current.getRange(cfiRange).toString(),
        //                 cfiRange
        //             })
        //         );
        //         renditionRef.current.annotations.add(
        //             "highlight",
        //             cfiRange,
        //             {},
        //             null,
        //             "hl",
        //             {
        //                 fill: 'rgba(15,118,176,0.6)',
        //                 "fill-opacity": "0.5"
        //             }
        //         );
        //         contents.window.getSelection().removeAllRanges();
        //     };
        //     renditionRef.current.on("selected", setRenderSelection);
        //     console.log(selections);
        //     return () => {
        //         renditionRef.current.off("selected", setRenderSelection);
        //     };
        // }
    }, [setSelections, selections]);
    return (
        <>
            <div className="App" style={{ position: "relative", height: "80vh" }}>
                <ReactReader
                    // location={location}
                    // locationChanged={locationChanged}
                    url={'https://online-lib-bucket.s3.amazonaws.com/Bogatyj_papa_bednyj_papa/Bogatyj_papa_bednyj_papa_ebook_90f36050-34d0-42c1-8e56-3f8101ff1751.epub'}
                    readerStyles={customReactReaderStyle}
                    epubViewStyles={customIEpubViewStyle}
                    // getRendition={(rendition) => {
                    //     renditionRef.current = rendition;
                    //     renditionRef.current.themes.default({
                    //         "::selection": {
                    //             background: "rgba(15,118,176,0.8)"
                    //         }
                    //     });
                    //     setSelections([]);
                    // }}
                />
            </div>
            {/*<div*/}
            {/*    style={{*/}
            {/*        position: "absolute",*/}
            {/*        bottom: "1rem",*/}
            {/*        right: "1rem",*/}
            {/*        zIndex: 1,*/}
            {/*        backgroundColor: "#ffcab3"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Selection:*/}
            {/*    <ul>*/}
            {/*        {selections.map(({ text, cfiRange }, i) => (*/}
            {/*            <li key={i}>*/}
            {/*                {text}{" "}*/}
            {/*                /!*<button*!/*/}
            {/*                /!*    onClick={() => {*!/*/}
            {/*                /!*        renditionRef.current.display(cfiRange);*!/*/}
            {/*                /!*    }}*!/*/}
            {/*                /!*>*!/*/}
            {/*                /!*    Show*!/*/}
            {/*                /!*</button>*!/*/}
            {/*                <button*/}
            {/*                    onClick={() => {*/}
            {/*                        renditionRef.current.annotations.remove(*/}
            {/*                            cfiRange,*/}
            {/*                            "highlight"*/}
            {/*                        );*/}
            {/*                        setSelections(selections.filter((item, j) => j !== i));*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    x*/}
            {/*                </button>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </>
    );
}

export default EBookReader;