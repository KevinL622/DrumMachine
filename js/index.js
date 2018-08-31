var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var sounds = [
{
  name: "Cowbell",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/8[kb]COWBELL1.aif.mp3",
  keyCode: 81,
  key: "Q",
  color: "red" },

{
  name: "Snare",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/31[kb]SNARE2.aif.mp3",
  keyCode: 87,
  key: "W",
  color: "orange" },

{
  name: "Clap",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/54[kb]CLAPPO0.aif.mp3",
  keyCode: 69,
  key: "E",
  color: "yellow" },

{
  name: "HH-Closed",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/12[kb]HHCLOSE2.aif.mp3",
  keyCode: 65,
  key: "A",
  color: "green" },

{
  name: "HH-Open",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/31[kb]HHOPEN1.aif.mp3",
  keyCode: 83,
  key: "S",
  color: "blue" },

{
  name: "Rim-Shot",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/14[kb]RIMSHOT1.aif.mp3",
  keyCode: 68,
  key: "D",
  color: "indigo" },

{
  name: "Kick",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/69[kb]thick_acoustic_bd.aif.mp3",
  keyCode: 90,
  key: "Z",
  color: "purple" },

{
  name: "Ride",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/125[kb]RIDE.aif.mp3",
  keyCode: 88,
  key: "X",
  color: "maroon" },

{
  name: "Crash",
  source: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/heavy-drumkit/102[kb]CRASH.aif.mp3",
  keyCode: 67,
  key: "C",
  color: "gold" }];



var buttonStyle = {
  display: 'inline-block',
  position: 'relative',
  width: '19vh',
  height: '19vh',
  color: 'black',
  backgroundColor: 'white',
  fontSize: '5vh',
  borderRadius: '20%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'black' };


var activeButtonStyle = {
  display: 'inline-block',
  position: 'relative',
  width: '19vh',
  height: '19vh',
  color: "white",
  backgroundColor: 'black',
  fontSize: '5vh',
  borderRadius: '20%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'black' };


var CreateAudio = function CreateAudio(props) {
  return (
    React.createElement("a", { style: props.styleButton, className: "drum-pad", id: props.drumpadId, title: props.buttonKeyCode, onClick: props.play },
      React.createElement("audio", { id: props.audioId, className: "clip", preload: "auto", src: props.url, type: "audio/mpeg" }),

      React.createElement("p", null, props.textName)));


};var

DrumApp = function (_React$Component) {_inherits(DrumApp, _React$Component);
  function DrumApp(props) {_classCallCheck(this, DrumApp);var _this = _possibleConstructorReturn(this, (DrumApp.__proto__ || Object.getPrototypeOf(DrumApp)).call(this,
    props));
    _this.state = {
      sound: "",
      button: buttonStyle };

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.activateSound = _this.activateSound.bind(_this);
    _this.activateButton = _this.activateButton.bind(_this);return _this;
  }_createClass(DrumApp, [{ key: "activateSound", value: function activateSound(

    elementId, elementName, buttonId) {var _this2 = this;
      document.getElementById(elementId).currentTime = 0;
      document.getElementById(elementId).play();
      this.setState({
        sound: elementName });

      this.activateButton(buttonId);
      setTimeout(function () {return _this2.activateButton(buttonId);}, 100);
    } }, { key: "activateButton", value: function activateButton(

    item) {
      document.getElementById(item.name).style.backgroundColor === 'white' ?
      document.getElementById(item.name).style.backgroundColor = item.color :
      document.getElementById(item.name).style.backgroundColor = 'white';
    } }, { key: "handleKeyDown", value: function handleKeyDown(

    event) {
      for (var i = 0; i < sounds.length; i++) {
        if (event.keyCode == sounds[i].keyCode) {
          document.getElementById(sounds[i].name).click();
        }
      }
    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener('keydown', this.handleKeyDown);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyDown);
    } }, { key: "render", value: function render()

    {var _this3 = this;
      var drumpads = sounds.map(function (obj, index, array) {
        return (
          React.createElement(CreateAudio, {
            drumpadId: array[index].name,
            audioId: array[index].key,
            buttonKeyCode: array[index].keyCode,
            styleButton: _this3.state.button,
            url: array[index].source,
            play: function play() {return _this3.activateSound(array[index].key, array[index].name, array[index]);},
            textName: array[index].key }));


      });
      return (
        React.createElement("div", { id: "drum-machine" },
          React.createElement("h1", { id: "title" }, "Drum Machine"),
          React.createElement("div", { id: "drumDisplay" },
            React.createElement("div", { className: "container" },
              drumpads)),


          React.createElement("div", { id: "displayBox" },
            React.createElement("p", { id: "display" }, React.createElement("strong", null, this.state.sound)))));



    } }]);return DrumApp;}(React.Component);
;

ReactDOM.render(React.createElement(DrumApp, null), document.getElementById("app"));