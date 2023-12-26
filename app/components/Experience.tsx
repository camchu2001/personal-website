'use client';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/lib/data';

export const Experience = () => {
  return (
    <section id="experience">
      <div className="mt-16">
        <VerticalTimeline>
          {
            experiences.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={
                    {
                      background: '#98B0A9',
                      boxShadow: 'none',
                      textAlign: 'left',
                      padding: '1.3rem 2rem'
                    }
                  }
                  contentArrowStyle={{
                    borderRight: '7px solid #98B0A9'
                  }}
                >
                  <h3 className="text-black font-bold capitalize xl:text-xl">{item.title}</h3>
                  <p className="text-black !mt-1 font-semibold xl:text-lg">
                    {item.company}
                  </p>
                  <p className="font-normal !mt-0 text-gray-700 xl:text-lg">{item.location}</p>
                  <p className="text-black !mt-0 !font-normal italic">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>
      </div>
    </section >
  );
};
