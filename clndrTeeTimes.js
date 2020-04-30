// https://www.jqwidgets.com/jquery-widgets-demo/demos/jqxscheduler/index.htm
var source = []
newEvents = []
deletedEvents = []

function Main() {
  StartScheduler()
}

function StartScheduler() {
// first set up the control
  $("#Scheduler11").jqxScheduler({   
    // all the fields in the popup scheduler window
    editDialogCreate: function(dialog, fields, editAppointment) {
      fields.repeatContainer.hide();
      fields.statusContainer.hide();
      fields.timeZoneContainer.hide();
      //fields.colorContainer.hide();
      
      fields.subjectLabel.html("Subject");
      fields.locationLabel.html("Location");
      //fields.location.hide();
      fields.fromLabel.html("Start");
      fields.toLabel.html("End");
      //fields.resourceLabel.html("calendar");
    },

      TeeTimeDataFields: {
      // fields to be set by user when scheduling new event
      from: "Start",
      to: "End",
      id: "id",
      description: "description",
      subject: "subject",
      location: "location",
      color: "color"
    },
    views: [
      'dayView',
      'weekView',
      'monthView',
      'agendaView'
    ]
  })
  
  TeeTimes = []   // hold all appointments in this
// make existing appts to be displayed
  TeeTime1 = {
    id: "id1",
    description: "TeeTime#1",
    subject: "Full 18",
    location: "4040",
    Start: new Date("02/26/2020 07:00:00"),
    End: new Date("02/26/2020 08:00:00"),
    color: "red"
  }
  TeeTime2 = {
    id: "id2",
    description: "TeeTime#2",
    subject: "Back Nine",
    location: "3023",
    Start: new Date("02/25/2020 15:00:00"),
    End: new Date("02/25/2020 17:00:00"),
    color: "green"
  }
  TeeTime3 = {
    id: "id3",
    description: "TeeTime#3",
    subject: "Front Nine",
    location: "3023",
    //calender: "Not Sure",
    Start: new Date("02/22/2020 11:00:00"),
    End: new Date("02/22/2020 14:00:00"),
    color: "blue"
  }

  appointments[0] = TeeTime1;
  appointments[1] = TeeTime2;
  appointments[2] = TeeTime3;

  //prepare the data for application to the control
  // requires appts be in array
  source = [];
  source = {
    dataType: "array",
    dataFields: [{
      name: "id",
      type: "string"
    }, {
      name: "description",
      type: "string"
    }, {
      name: "subject",
      type: "string"
    }, {
      name: "location",
      type: "string"
    }, {
      name: "Start",
      type: "date"
    }, {
      name: "End",
      type: "date"
    }, {
      name: "color",
      type: "string"
    }],
    id: "id",
    localData: TeeTimes
  };

// create adapter/pointer that holds the data
  adapter = new $.jqx.dataAdapter(source);
  $("#Scheduler11").jqxScheduler({
    source: adapter
  });

// not sure what this is for - 
  datum1 = new $.jqx.date(2020, 2, 25, 9, 0, 0);
  $("#Scheduler11").jqxScheduler({
    Date: datum1
  });

  $("#Scheduler11").jqxScheduler("ensureAppointmentVisible", "id3");

// create the calender
  res = {
    colorScheme: "scheme05",
    dataField: "calender",
    source: new $.jqx.dataAdapter(source)
  };

  $("#Scheduler11").jqxScheduler({
    resources: res
  });


// make a new appt
  newTeeTime4 = {
    id: "id4",
    description: "Meeting 4",
    subject: "New Topics",
    location: "4040",
    Start: new Date("02/25/2020 10:00:00"),
    End: new Date("02/25/2020 11:30:00"),
    color: "green"
  };
  
  // add new one to calendar - need to add and also add to an ongoing array
  $("#Scheduler11").jqxScheduler("addAppointment", newTeeTime4);
  newEvents.push(newTeeTime4)

// code to delete an event
$//('#Scheduler11').jqxScheduler('deleteAppointment', appointmentId);
// code to get selected event
var selection = $('#Scheduler11').jqxScheduler('getSelection');


// default show in month view
  $("#Scheduler11").jqxScheduler({
    view: "monthView"
  });
  
}


btnBackToHole.onclick=function(){
  ChangeForm(holeInfo)
}

btnTotemp.onclick=function(){
  ChangeForm(tempAPI)
}
