import React, {useMemo} from 'react';
import {NavItem} from "./types";

interface NavItemComponentProps {
    item: NavItem;
    currentItemId: string
    onClick: () => void


}

const NavItemComponent = ({item, currentItemId, onClick}: NavItemComponentProps) => {

    const isSelected = useMemo(() => {
        return (currentItemId === item.id)
    }, [currentItemId, item])

    const itemClassName = useMemo(() => {
        return (isSelected)
            ? 'navBarItem navBarItemSelected'
            : 'navBarItem'
    }, [isSelected])

    const markerClassName = useMemo(() => {
        return (isSelected)
            ? 'navBarItemMarker navBarItemMarkerSelected'
            : 'navBarItemMarker'
    }, [isSelected])

    return (
        <div className={itemClassName} onClick={onClick}>
            {item.name}
            <div className={markerClassName}/>
        </div>
    );
};

export default NavItemComponent;