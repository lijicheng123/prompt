/**
 * @File index.js
 * @Author lijicheng
 * @Created at 2018/3/27
 * @Last modified by lijicheng
 */
(function () {
  function Prompt(option) {
    /**
     * 先创建dom备用
     * @type {HTMLDivElement}
     */
    var promptDiv = document.createElement('div');
    document.body.appendChild(promptDiv);

    this.container = promptDiv;

    var _this = this;
    this.container.onclick = function (e) {
      /**
       * 1、如果有 JSLEFTBUTTON 这个字样的class就是我们左边的按钮，同理 JSRIGHTBUTTON 是右边按钮
       * 2、如果是左边按钮，则执行leftEvent
       * 3、本来是用classList判断的，后来考虑到兼容性的问题，还是使用比较传统的className
       */
      if(e.target.className.indexOf('JSLEFTBUTTON') >= 0){
        _this.leftEvent()
      }else if(e.target.className.indexOf('JSRIGHTBUTTON') >= 0){
        _this.rightEvent()
      }else if(e.target.className.indexOf('JSMASK') >= 0){
        _this.maskEvent()
      }
    }
  }
  Prompt.prototype.open = function (option) {
    this.title = option.title
    this.message = option.message
    this.leftButton = option.leftButton
    this.rightButton = option.rightButton

    this.classList = option.classList
    this.leftEvent = option.leftEvent
    this.rightEvent = option.rightEvent
    this.maskEvent = option.maskEvent

    this.container.innerHTML = '<div class="mask center-wrap ' +
      this.classList +
      '">\n' +
      '  <div class="prompt-wrap center JSMASK">\n' +
      '    <div class="prompt">\n' +
      '      <div class="title">' +
      this.title +
      '</div>\n' +
      '      <div class="tip">' +
      this.message +
      '</div>\n' +
      '      <div class="button-wrap">\n' +
      '        <button class="cancel JSLEFTBUTTON">' +
      this.leftButton +
      '</button>\n' +
      '        <button class="confirm JSRIGHTBUTTON">' +
      this.rightButton +
      '</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>'
  }
  Prompt.prototype.close = function () {
    this.container.innerHTML = null
  }
  window.Prompt = Prompt
})(window)

