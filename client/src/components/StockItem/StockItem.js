import React from 'react'
import { Card,Input } from 'semantic-ui-react'


const items = [
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  }
]

export const StockItem = (props) => (
  <div>
    <Card.Group items={items} />
  </div>
)
