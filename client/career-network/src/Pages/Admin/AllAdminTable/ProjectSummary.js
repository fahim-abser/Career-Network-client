import React from 'react'
import projectjson from './ProjectSummery.json'

function ProjectSummary() {
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>client Name</th>
                    <th>team</th>
                    <th>project</th>
                    <th>project cost</th>
                    <th>payment</th>
                    <th>status</th>
                </tr>
                </thead>
                <tbody>
                    {projectjson.map((item)=>
                        <tr>
                            <td>{item?.clintName}</td>
                            <td>
                               <div className="avatar-group -space-x-6">
                                    {item?.team.map((data)=>
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src={data} alt="" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>{item?.project}</td>
                            <td>{item?.cost}</td>
                            <td>{item?.payment}</td>
                            <td><button className='btn btn-warning btn-xs'>{item?.status}</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default ProjectSummary