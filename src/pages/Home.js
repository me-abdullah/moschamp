import React from 'react'
import About from '../components/About/About'
import Certified from '../components/Certified/Certified'
import Contact from '../components/Contact/Contact'
import Win from '../components/Win/Win'
import Deadline from '../components/Deadline/Deadline'
import Promotion from '../components/Promotion/Promotion'
import Rules from '../components/Rules/Rules'
import Pastcomp from '../components/Past Comp/Pastcomp'
import Fame from '../components/Fame/Fame'
import Header from '../components/Header/Header'

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Certified />
            <Win />
            <Deadline />
            <Promotion />
            <Rules />
            <Pastcomp />
            <Fame />
            <Contact />
        </>
    )
}
