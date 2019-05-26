import React from 'react';
import HomepageHeader from './Home/HomepageHeader';
import HomepageBlurb from './Home/HomepageBlurb';
import HomepageMealSection from './Home/HomepageMealSection';
import HomepageDessertSection from './Home/HomepageDessertSection';
import HomepageReservationSection from './Home/HomepageReservationSection';

const Home = () => {
    return (
        <div>
            <HomepageHeader />
            <HomepageBlurb />
            <HomepageMealSection />
            <HomepageDessertSection />
            <HomepageReservationSection />
        </div>
    )
}

export default Home;