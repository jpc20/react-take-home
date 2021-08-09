import React from 'react'

const Campaign = (campaign) => {
    console.log(campaign)
    return (
        <div>
            {campaign.campaign.campaign_name}
        </div>
    )
}

export default Campaign
