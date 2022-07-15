import * as React from 'react';
import { useSelect } from '@mui/base';
import { styled } from '@mui/system';
import { useComponentVisible } from '../../../utils/useOutsideAlerter';

const Root = styled('div')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  position: relative;
  display: inline-block;
  vertical-align: baseline;
  color: #000;
`;

const Toggle = styled('div')(
    ({ theme }) => `
  font-family: Baloo Tammudu 2;
  font-size: 13px;
  box-sizing: border-box;
  min-height: 40px;
  min-width: 160px;
  background: #FFFFFF;
  box-shadow: 0 5px 13px 0 rgba(52,51,101,0.09);
  border-radius: 5px;
  padding: 10px;
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

const options = [
    {
        label: 'Checkbox',
        value: 'Checkbox',
    },
    {
        label: 'Radio',
        value: 'Radio',
    },
    {
        label: 'Text',
        value: 'Text',
    },
];





function CustomSelect({ options, placeholder, icon }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const listboxRef = React.useRef(null);

    const { getButtonProps, getListboxProps, getOptionProps, value } = useSelect({
        listboxRef,
        options,
    });

    React.useEffect(() => {
        if (isComponentVisible) {
            listboxRef.current.focus();
        }
    }, [isComponentVisible]);

    return (
        <Root
            onClick={() => setIsComponentVisible(!isComponentVisible)}
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
    );
}

export function UseSelect() {
    return <CustomSelect placeholder="Select" icon={'some'} options={options} />;
}
