import React from 'react';
import { UseSelect } from '../selects/select';
import dragIdentifier from './Group2Copy.svg';
import './styles.css';

export const DragAnnoucementCard = (props) => {
    const [selected, setSelected] = React.useState(null);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    const announcementData = [
        {
            title: "ATTENTION ALL STAFF",
            description: "The East Parking Lot will be unavailable on December 4th & 5th. Please plan accordingly.",
            dates: "Created in July 01, 2021  |   Valid thru December 31, 2021",
            position: 1,
        }
    ]

    return (
        <>
            {/* Ele refers to element */}
            {announcementData.map((ele, index) => (
                <div key={index} className={`${selected === index ? 'dragCard__container show' : 'dragCard__container'}`}>
                    <div className='drag__indicator'>
                        <img src={dragIdentifier} className="drag__img" alt="" />
                    </div>

                    <div className='dragCard__content' onClick={() => toggle(index)}>
                        <div className='announcement__title'>
                            {ele.title}
                        </div>
                        <div className={`${selected === index ? 'announcement__body show' : 'announcement__body'}`}>
                            <p> {ele.description} </p>

                            <div className='announcement__footer'>
                                <div style={{
                                    fontFamily: "Feather-Icons",
                                    fontSize: 20,
                                    color: "#0063F0",
                                    marginRight: 10,
                                }}>
                                    
                                </div>
                                <div style={{
                                    color: "#8280B1",
                                    fontSize: 11,
                                }}>
                                    {ele.dates}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='dragCard__end'>
                        <div className='announcement__end__card'>
                            {ele.position}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export const DragTemplateCard = () => {
    return (
        <div className={`dragCard__container`}>
            <div className='drag__indicator'>
                <img src={dragIdentifier} className="drag__img" alt="" />
            </div>

            <div className='dragCard__content'>
                <div className='newTemplate__card__question'>
                    Titulo
                </div>
                <div className='newTemplate__card__body'>
                    Type text
                </div>
            </div>

            <div className='dragCard__end'>
                <UseSelect/>
            </div>
        </div>
    )
}