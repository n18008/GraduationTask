import React, { useState, useMemo } from 'react'
import { db } from '../Firebase'

import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Link
} from '@material-ui/core'

export default ({match}) => {
  const pid = match.params.pid
  const [events, setEvents] = useState([])
  useMemo(() => {
    const col = db.collection('events')

    // 更新イベント監視
    col.where('status.willhold', '==', true).onSnapshot(query => {
      const data = []
      query.forEach(doc => data.push({ ...doc.data(), id: doc.id }))
      setEvents(data)
    })

    return col
  }, [])

  return (
    <>
      <Typography variant='h5' align='center' gutterBottom>申し込み可能な大会</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align='right'>time</TableCell>
              <TableCell align='right'>place</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events ? events.map(row => {
              const data = JSON.stringify(row.when.toDate()).slice(1, 11)
              const path = '/events/' + row.id + '/player/' + pid + '/apply'
              return (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    <Link href={path} color='inherit'>
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell align='right'><Link href={path} color='inherit'>{data}</Link></TableCell>
                  <TableCell align='right'><Link href={path} color='inherit'>{row.where}</Link></TableCell>
                </TableRow>
              )
            }) : null}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}
