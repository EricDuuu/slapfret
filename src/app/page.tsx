'use client'
import ChordSelectFretboard from './containers/ChordSelectFretboard'
import ScaleSelectFretboard from './containers/ScaleSelectFretboard'

export default function Home() {
  return (
    <div>
      <ScaleSelectFretboard/>
      <div className='space-y-5'/>
      <ChordSelectFretboard/>
    </div>
  );
}
