import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

class sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }
    render() {
        return (
            <div>
                <Menu
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    {...this.props}
                >

                    {/* {t("home")} */}
                    <Link onClick={() => this.closeMenu()} className="menu-item" to="/">{this.props.t("home")}</Link>
                    <Link onClick={() => this.closeMenu()} className="menu-item" to="/students">{this.props.t("lookingforroom")}</Link>
                    <Link onClick={() => this.closeMenu()} className="menu-item" to="/hospita">{this.props.t("becomehost")}</Link>
                    <Link onClick={() => this.closeMenu()} className="menu-item" to="/blog">{this.props.t("blog")}</Link>
                    <Link onClick={() => this.closeMenu()} className="menu-item" to="/contact">{this.props.t("contact")}</Link>
                </Menu>
            </div>
        )
    }
}
export default withTranslation(['header'])(sidebar);