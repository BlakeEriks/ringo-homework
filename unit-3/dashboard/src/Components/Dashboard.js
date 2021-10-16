import Card from './Card'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='top-row'>
                <Card className='small' title='Reviews' content='Great prices'/>
                <Card className='small' title='Average Rating' content='4.5/5'/>
                <Card className='small' title='Sentiment Analysis' content='Love the view'/>
            </div>
            <Card className='large' title='Website Visitors' content="Beautiful graph with beautiful data"/>
        </div>
    )
}

export default Dashboard