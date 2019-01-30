// Module imports
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'





// Local imports
import { actions } from '../store'





// Local constants
const mapDispatchToProps = dispatch => bindActionCreators({
  getUserData: actions.user.getData,
}, dispatch)
const mapStateToProps = ({ user }) => ({ user })





@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends React.Component {
  /***************************************************************************\
    Local Properties
  \***************************************************************************/
  
  state = {
    loading: false,
  }





  /***************************************************************************\
    Private Methods
  \***************************************************************************/

  _initializeUserData = async () => {
    const { getUserData } = this.props
    
    this.setState({ loading: true })
    
    await this.props.getUserData()
    
    this.setState({ loading: false })
  }

  
  
  
  
  /***************************************************************************\
    Public Methods
  \***************************************************************************/
  
  componentDidMount () {
    this._initializeUserData()
  }
  
  render () {
    const { user } = this.props
    const { loading } = this.state
    
    console.log('user.data', user.data)
    
    return (
      <React.Fragment>
        {loading && (
          'Loading...'
        )}
        
        {(!loading && user.data) && (
          <div className="grid three-columns">
            <section className="panel span-two">
              <header>Music Player</header>
              
              <img
                className="full-width"
                src="http://www.glowscript.org/docs/GlowScriptDocs/images/graph.jpg" />
            </section>
            
            <section className="panel">
              <header>Top Chatters</header>
              
              <ol className="bordered full-width numbered striped vertical">
                <li>Bob</li>
                <li>Sally</li>
                <li>Dirk</li>
                <li>Chaz</li>
                <li>ofeks</li>
              </ol>
            </section>
            
            <section className="panel span-two">
              <header>Chat Stats</header>
              
              <img
                className="full-width"
                src="http://applesigma.com/wp-content/uploads/2015/05/Muswitch-1024x444.png" />
            </section>
            
            <section className="panel">
              <header>Most popular commands</header>
              
              <ol className="vertical">
                <li>!commands</li>
                <li>!beard</li>
                <li>!fireside</li>
                <li>!shoutout</li>
                <li>!uptime</li>
              </ol>
            </section>
            
            <section className="panel span-two">
              <header>Log</header>
              
              <ol className="vertical">
                <li><span><time>{(new Date()).toISOString()}</time> {'{user}'} used `!beard` command</span></li>
                <li><span><time>{(new Date()).toISOString()}</time> {'{user}'} used `!beard` command</span></li>
                <li><span><time>{(new Date()).toISOString()}</time> {'{user}'} revoked {'{user}\'s'} `!beard` permissions</span></li>
                <li><span><time>{(new Date()).toISOString()}</time> {'{user}'} used `!beard` command</span></li>
                <li><span><time>{(new Date()).toISOString()}</time> Stream started</span></li>
              </ol>
            </section>
          </div>
        )}
      </React.Fragment>
    )
  }
}





export default Dashboard