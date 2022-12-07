export const goToHomePage = (navigate) => {
  navigate("/")
}
export const goToVoltar = (navigate) => {
  navigate(-1)
}
export const goToLogin = (navigate) => {
  navigate("/Admin")
}
export const goToAdminUser = (navigate) => {
  navigate("/Admin/User")
}
export const goToNewsPage = (navigate, id) => {
  navigate(`/NewsPage/${id}`)
}