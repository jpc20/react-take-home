import React, { useEffect, useState } from 'react'
import Campaign from './Campaign.js'


const Feed = () => {
    const [campaigns, setCampaigns] = useState([])
    useEffect(() => {
            fetch(
          "https://www.plugco.in/public/take_home_sample_feed",
          {
            headers: { accept: "application/json" },
          }
        )
          .then((resp) => resp.json())
          .then((data) => setCampaigns(data.campaigns));
    }, [])

    return (
        <div>
            {
                campaigns.map((campaign) => (
                    <div>
                        campaign
                    </div>
                ))
            }
        </div>
    )
}

export default Feed
