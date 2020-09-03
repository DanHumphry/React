import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../css/Work.css'

function Work(){
    return(
    <>
    <div className="contents-container">
        <main className="main-container">
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={[
            { title: 'google backend 공채모집', date: '2020-08-19', url: 'http://google.com/'},
            { title: 'toss frontend 공채모집', date: '2020-08-19', url: 'https://toss.im/'},
            { title: 'toss frontend 공채모집', start: '2020-08-01', end: '2020-08-11', url: 'https://toss.im/' },
            { title: 'toss frontend 공채모집', date: '2020-08-19' },
            { title: 'toss frontend 공채모집', date: '2020-08-19' },
            ]}
            eventClick={(info)=>{
                info.jsEvent.preventDefault()       
                if(info.event.url){
                    window.open(info.event.url);
                }
            }}
            locale = "ko"
            />
        </main>
        <aside className="aside-container">

        </aside>
    </div>
    
    </>
    )
}
export default Work;