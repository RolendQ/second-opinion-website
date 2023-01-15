import React, { Component } from "react";
import UploadService from "../../services/UploadFilesService"
import UPLOAD from '../../assets/upload_button.png'
import './Body3.css'
// 图片上传组件要满足功能有 图片上传，进度条，预览，提示信息等

export default class UploadImages extends Component {
  constructor(props) {
    super(props);
    this.selectFiles = this.selectFiles.bind(this);
    this.upload = this.upload.bind(this);
    this.uploadImages = this.uploadImages.bind(this);

    this.state = {
      selectedFiles: undefined, // selectedFiles:File对象;
      previewImages: [], // previewImages:blob 对象列表，用于提交前预览;
      progressInfos: [], // elements:{idx,file}
      message: [],
      imageInfos: [], // ImageInfos:从服务器上获取的文件列表信息;
    }; 
  }

  // 别忘记还原
  // async componentDidMount() {
  //   // 这个似乎一开始加载网页的时候就会进行？
  //   let res = await UploadService.getFiles()
  //   this.setState({
  //       imageInfos: res.data,
  //   });
  // }

  selectFiles(event) {
    // 选择图片的方法,events是什么?
    let images = [];
    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]))
    }
    // events.target.files是file对象，描述了文件信息
    // URL.createObjectURL:将File生成一个blog对象,并将其放入 previewImages 数组中
    // 注意,可以直接通过输出,获得资源，例如得到 blob:null/b80824cf-6cf3-4006-bc10-12a90cf47f70
    // 在浏览器输入该字符串可以获得结果
    this.setState({
      progressInfos: [],
      message: [],
      selectedFiles: event.target.files,
      previewImages: images
    });
  }

  upload(idx, file) {
    // idx是图片下标,file是文件对象;上传单个文件
    let _progressInfos = [...this.state.progressInfos];
    // 执行axios的请求;
    UploadService.upload(file, (event) => {
      _progressInfos[idx].percentage = Math.round((100 * event.loaded) / event.total);
      this.setState({
        progressInfos: _progressInfos,
      });
    })
      .then(() => {
        this.setState((prev) => {
          let nextMessage = [...prev.message, `${file.name} 上传成功！`];
          return {
            message: nextMessage
          };
        });
        //get 服务器上的文件信息;
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          imageInfos: files.data,
        });
      })
      .catch(() => {
        _progressInfos[idx].percentage = 0;
        this.setState((prev) => {
          let nextMessage = [...prev.message, "Could not upload the image: " + file.name];
          return {
            progressInfos: _progressInfos,
            message: nextMessage
          };
        });
      });
  }

  uploadImages() {
    // do the real upload to Backend server
    const selectedFiles = this.state.selectedFiles;

    let _progressInfos = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      _progressInfos.push({ percentage: 0, fileName: selectedFiles[i].name });
    }

    this.setState(
      {
        progressInfos: _progressInfos,
        message: [],
      },
      () => {
        for (let i = 0; i < selectedFiles.length; i++) {
          this.upload(i, selectedFiles[i]);
        }
      }
    );
  }
  // 使用了 Boostrap 的进度条,
  render() {
    const { selectedFiles, previewImages, progressInfos, message, imageInfos} = this.state;

    return (
      <div>
        <div className="row">
            <h2> Upload mammograms </h2>
            <input type="file" multiple accept="image/*" onChange={this.selectFiles} id="actual-btn" name="filename" hidden/>
            <label class="body__upload" for="actual-btn"><img src={UPLOAD} alt=""/></label>
        </div>

          <div className="col-4">
            <button
              className="login__submit"
              disabled={!selectedFiles}
              onClick={this.uploadImages}
            >
              上传
            </button>
          </div>

          {previewImages && (
          <div>
            {previewImages.map((img, i) => {
              return <img className="preview" src={img} alt={"image-" + i}  key={i}/>;
            })}
          </div>
        )}
                {/* //生成进度条 */}
                {progressInfos &&
          progressInfos.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}
                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}

        {message.length > 0 && (
          <div className="alert alert-secondary mt-2" role="alert">
            <ul>
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
