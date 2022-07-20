import React from "react";
import { useSelect } from '@mui/base';
import { useComponentVisible } from '../../../utils/useOutsideAlerter';
import styled from "styled-components";


const Root = styled('div')`
  font-family: Baloo Tammudu 2;
  font-size: 13px;
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  color: #000;
  width:100%;
`;

const Toggle = styled('div')(
    ({ theme }) => `
  font-family: Baloo Tammudu 2;
  font-size: 13px;
  box-sizing: border-box;
  min-height: 40px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 5px 13px 0 rgba(52,51,101,0.09);
  border-radius: 5px;
  padding: 7px;
  text-align: left;
  color: #8280B1;
  cursor: default;
  transition: background-color 0.2s ease;
  `,
);

const Listbox = styled('ul')(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 13px;
  box-sizing: border-box;
  padding: 0px;
  margin: 5px 0 0 0;
  list-style: none;
  position: absolute;
  height: auto;
  transition: opacity 0.1s ease;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E6E5F8;
  border-radius: 11px;
  color: #8280B1;
  overflow: auto;
  z-index: 1;
  outline: 0px;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s 0.3s ease, visibility 0.4s 0.5s step-end;
  }

  & > li {
    padding: 15px 9px 15px 9px;

    &:hover {
        background-color: rgba(0,99,240,0.2);
    }

    &[aria-selected='true'] {
        background-color: rgba(0,99,240,0.2);
        color: #343365;
        font-weight: 600;
    }
  }
  `,
);

const defaultOptions = [
    {
        label:'Option 1',
        value:'Option 1',
    },
    {
        label:'Option 2',
        value:'Option 2',
    },
    {
        label:'Option 3',
        value:'Option 3',
    }
]

export function CustomSelect ({ options=defaultOptions , placeholder, selectLabel,st, setQuestionType, defaultValue, id }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const listboxRef = React.useRef(null);

    //Radio default value for Template card questions
    const { getButtonProps, getListboxProps, getOptionProps, value=defaultValue } = useSelect({
        listboxRef,
        options,
    });

    React.useEffect(() => {
        if (isComponentVisible) {
            listboxRef.current.focus();
        }
        setQuestionType&&setQuestionType(value);
    }, [isComponentVisible, value]);

    return (
        <div style={st} >
            <div
                style={{
                    color: "#343365",
                    fontFamily: "Baloo Tammudu 2",
                    fontSize: 13,
                    fontWeight: 400,
                    marginBottom: 7,
                    
                }}
            >
                {selectLabel}
            </div>
            <Root
                id={id}
                onClick={() => { setIsComponentVisible(!isComponentVisible) }}
                ref={ref}
            >
                <Toggle {...getButtonProps()}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>{value ? value : placeholder}</div>
                        <div
                            style={{
                                fontFamily: "Feather-Icons",
                                fontSize: 24,
                                color: "#0063F0",
                            }}
                        >
                            
                        </div>
                    </div>
                </Toggle>
                <Listbox {...getListboxProps()} className={isComponentVisible ? '' : 'hidden'}>
                    {options.map((option) => (
                        <li key={option.value} {...getOptionProps(option)}>
                            {option.label}
                        </li>
                    ))}
                </Listbox>
            </Root>
        </div>
    );
}

export function UseSelect({ options, setQuestionType }) {
    return <CustomSelect placeholder="Select" setQuestionType={setQuestionType} options={options} />;
}
