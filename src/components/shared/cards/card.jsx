import React from 'react';
import dragIdentifier from './Group2Copy.svg';
import './styles.css';

export const DragAnnoucementCard = (props) => {
    const [selected, setSelected] = React.useState(null);

    const toggle = i => {
        if(selected === i){
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
                <div key={index} className={`${selected===index?'announcement__container show':'announcement__container'}`}>
                    <div className='drag__indicator'>
                        <img src={dragIdentifier} className="drag__img" alt="" />
                    </div>

                    <div className='announcements__content' onClick={()=> toggle(index)}>
                        <div className='announcements__title'>
                            {ele.title}
                        </div>
                        <div className={`${selected===index?'announcements__body show': 'announcements__body'}`}>
                            <p> {ele.description} </p>

                            <div className='announcements__footer'>
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

                    <div className='announcements__position'>
                        <div className='announcements__position__content'>
                            {ele.position}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};