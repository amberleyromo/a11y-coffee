/** @jsx jsx */
import { jsx } from "theme-ui"
import { Component, Fragment } from "react"

// TODO Fix all eslint issues

// data generator -> to create 10 volume bars
const getItems = count => {
  return Array.from({ length: count }, (v, i) => (i + 1) * 10).map(k => {
    let decimal = k / 100
    return {
      integer: `${k}`,
      deci: `${decimal}`,
      vol: `vol${k}`,
      level: `Volume Level ${k}/100`,
      checked: true,
    }
  }) // END MAP
} // END ARROW

const srOnlyCss = {
  border: `0 !important`,
  clip: `rect(1px, 1px, 1px, 1px) !important`,
  clipPath: `inset(50%) !important`,
  height: `1px !important`,
  overflow: `hidden !important`,
  padding: `0 !important`,
  position: `absolute !important`,
  width: `1px !important`,
  whiteSpace: `nowrap !important`,
}

const playerVolumeLabelCss = {
  borderTop: `1px solid #ccc`,
  background: `#f6dccd`,
  borderRight: `2px solid #1d1d1d`,
  display: `inline-block`,
  width: `8px`,
  height: `2.5rem`,

  "&:hover": {
    "& ~ label": {
      borderTop: `1px solid #000`,
    },
  },
}

class VolumeBars extends Component {
  state = {
    volumeBarList: getItems(10),
  }

  componentDidMount() {
    const localKey = `lastVolumeBarsOn`
    const localStorageRef = localStorage.getItem(localKey)
    if (localStorageRef) {
      this.setState({ volumeBarList: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const localKey = `lastVolumeBarsOn`
    const localValue = JSON.stringify(this.state.volumeBarList)
    localStorage.setItem(localKey, localValue)
  }

  //We are going to track which volume bars are "checked"
  handleOnClick = index => {
    // make a copy of state
    const volumeBarList = [...this.state.volumeBarList]
    // Get the index positions from 0 till index (index clicked)
    for (let i = 0; i <= index; i++) {
      volumeBarList[i].checked = true
    }
    // Get the index positions of the remaining non-checked
    for (let i = index + 1; i < 10; i++) {
      volumeBarList[i].checked = null
    }
    // Update State
    this.setState({
      volumeBarList,
    })
  }

  getLabelBg = (theme, isChecked) => {
    return isChecked ? theme.colors.primary : theme.colors.muted
  }

  render() {
    return (
      <Fragment>
        {this.state.volumeBarList.map((item, index) => (
          <Fragment key={item.integer}>
            <input
              onClick={() => {
                this.handleOnClick(index)
              }}
              onChange={this.props.onChange}
              type="radio"
              name="volume"
              value={item.deci}
              id={item.vol}
              sx={srOnlyCss}
            />
            <label
              htmlFor={item.vol}
              sx={{
                ...playerVolumeLabelCss,
                bg: theme => this.getLabelBg(theme, item.checked),
              }}
            >
              <span sx={srOnlyCss}>{item.level}</span>
            </label>
          </Fragment>
        ))}
      </Fragment>
    )
  }
}

export default VolumeBars
