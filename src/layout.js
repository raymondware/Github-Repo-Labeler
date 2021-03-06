import React from 'react'
import InternalNav from './components/internal-nav'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
	mixins: [ampersandReactMixin],
	render () {
	const {me} = this.props;
	
    return (
      <InternalNav>
        <div>
          <nav className='top-nav top-nav-light cf' role='navigation'>
            <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
            <label htmlFor='menu-toggle'>Menu</label>
            <ul className='list-unstyled list-inline cf'>
              <li>Lablr</li>
              <li><a href='/repos'>Repos</a></li>
              <li className='pull-right'>
              	<span>{me.login}</span>
              	<a href='/logout'>Logout</a>
              </li>
            </ul>
          </nav>
          <div className='container'>
            {this.props.children}
          </div>
        </div>
      </InternalNav>
    )
  }
})