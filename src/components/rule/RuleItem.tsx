import React from 'react';
import {InterfaceRule} from "../../data/entities/Rule";

interface RuleItemProps {
    rule: InterfaceRule
}

const RuleItem = ({rule}: RuleItemProps) => {
    return (
        <div className={'ruleItem'}>
            <div className={'ruleItemTitle'} children={rule.title}/>
            <div className={'ruleItemText'} children={rule.text}/>
        </div>
    );
};

export default RuleItem;