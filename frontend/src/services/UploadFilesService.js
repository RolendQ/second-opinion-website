import http from "../http-common";

//http is a axios 对象
class FileUploadService {
  upload(file, onUploadProgress) {
    let formData = new FormData();
    // onUploadProgress用于个更新this.state.progressInfos,即进度条百分比信息

    // file是 HTMLFormElement对象
    formData.append("file", file);
    // /upload是url，formData是data,但是onUploadProgress 是 config的transformRequest 还是 transformResponse
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress,
    });
  }
  // 用于将文件数据以 post 请求格式，FormData 键值对的形式提交到后端， onUploadProgress 则是用于获取进度条数据
  getFiles() {
    return http.get("/files");
  }
  // 获取服务器上的文件列表
}
// 主要的作用就是和后端项目通讯，以进行文件的上传和文件列表数据的获取等
export default new FileUploadService();
