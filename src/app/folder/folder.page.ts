import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private file: File
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  public showModel(modelLocation: string): void {
    let iframe: HTMLElement = document.getElementById('modelFrame');
    var frame = <HTMLIFrameElement>iframe;
    let modeloGltf = frame.contentWindow.document.getElementById('modeloGltf');
    let path;

    if(modelLocation === 'local') {
      path = this.file.applicationDirectory + 'www/assets/aframe/3d/Contenedorbrutesintapa208ltsverde.gltf';
    } else {
      path = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
    }
        
    modeloGltf.setAttribute("gltf-model", path);
  }

}
