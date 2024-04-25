import React, { useState } from 'react'
import Navbar from '../components/Globals/Navbar'
import MyChannelUpload from '../components/MyChannel/MyChannelUpload'
import MyChannelVideo from '../components/MyChannel/MyChannelVideo'
import DashboardAnalytics from '../components/Dashboard/DashboardAnalytics'
import DashBoardHero from '../components/Dashboard/DashBoardHero'
import DashboardHeader from '../components/Dashboard/DashboardHeader1'
import EditDashboard from '../components/Dashboard/EditDashboard'
import DeleteDashboard from '../components/Dashboard/DeleteDashboard'

function DashboardPage() {

    const data = JSON.parse(sessionStorage.getItem('isAuth'))
    const user = data.data.user
    const [upload,setUpload] = useState(false)
    const [edit,setedit] = useState(false)
    const [editVid, setEditVid] = useState({})
    const [deleted, setdeleted] = useState(false)
  return (
    <>
    <Navbar  />
    <div class="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
        
        {upload ? <MyChannelUpload setUpload={setUpload}  /> : 
        
        <>
        <DashboardHeader user={user} setUpload={setUpload}/>
        <DashboardAnalytics />
        <DashBoardHero user={user} setedit={setedit} setEditVid={setEditVid} setdeleted={setdeleted} />
        { edit && <EditDashboard editVid={editVid} setedit={setedit} setEditVid={setEditVid}  />
        }
        {
          deleted &&<DeleteDashboard setdeleted={setdeleted} editVid={editVid} setEditVid={setEditVid} /> 
        }
        </>
        
        }

        
    </div>
    </div>
    
    

    </>
  )
}

export default DashboardPage