import React from 'react'

export default function Dropdown({ darkMode, region, setRegion }) {
    return (
        <select
            className={darkMode ? 'darkMode-dropdown dropdown' : 'lightMode-dropdown dropdown'}
            name="region"
            id="region"
            onChange={(e) => setRegion(e.target.value)} value={region}>
            <option value="Africa" >Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}
