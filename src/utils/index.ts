export const copyText = (text: string) => {
  if (!text) return
  if (window.isSecureContext && navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => {
        showToast("复制成功")
      },
      () => {
        showToast("复制失败")
      }
    )
  } else {
    const copyElem = document.createElement("textarea")
    let styles = copyElem.style
    styles.position = "fixed"
    styles.zIndex = "-100"
    styles.left = "-100%"
    styles.top = "-100%"
    copyElem.value = text
    document.body.appendChild(copyElem)
    copyElem.focus()
    copyElem.select()
    let result = false
    result = document.execCommand("copy")
    if (result) {
      showToast("复制成功")
    } else {
      showToast("当前浏览器不支持！")
    }
  }
}
