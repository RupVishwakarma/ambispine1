import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '@fullcalendar/core';
import Header from '../../components/Admin/Header';
import { tokens } from '../../theme';

const CalendarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateSelect = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;

    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (eventClick) => {
    if (window.confirm(`Are you sure you want to delete the event '${eventClick.event.title}'?`)) {
      eventClick.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Box textAlign="left">
      <Header title="CALENDAR" subtitle="Manage your events here" />
      </Box>
     
      <Box display="flex" justifyContent="space-between">
     
        <Box
          flex="1 1 20%"
          p="15px"
          backgroundColor={colors.primary[400]}
          borderRadius="4px"
        >
          <Typography variant="h6" sx={{ mb: '15px' }}>Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[400],
                  margin: '10px 0',
                  borderRadius: '4px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}
                />
              </ListItem>
            ))}
          </List>
        </Box>

       
        <Box flex="1 1 80%" ml="15px">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            initialEvents={[
              {
                id: '1',
                title: 'Initial Event 1',
                start: '2024-10-10T10:00:00',
                end: '2024-10-10T12:00:00',
                allDay: false,
              },
              {
                id: '2',
                title: 'Initial Event 2',
                start: '2024-10-12',
                allDay: true,
              },
            ]}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarComponent;
