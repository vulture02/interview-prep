import { getInterviewers } from '@/actions/explore'
import PageHeader from '@/components/resuables';
import React from 'react'
import ExploreGrid from './_components/ExploreGrid';

const Explorepage  = async() => {
    const interviewers = await getInterviewers();
  return (
    <div>
       <main className='min-h-screen'>
          <PageHeader
          label="Explore"
           gray="Find your"
           gold="expert interviewer"
           description="Browse senior engineer from top companies"/>

        <div className='max-w-6xl mx-auto px-8 xl:px-0 py-10'>
            <ExploreGrid interviewers={interviewers}/>
        </div>

       </main>
    </div>
  )
}

export default Explorepage
