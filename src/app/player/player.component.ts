import { Component } from '@angular/core';
import { Music } from '../music';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  audio = new Audio();

  songs: Music[] = [
    {
      singer: 'Song 1',
      url: 'assets/Dekha Tenu Pehli Pehli Baar Ve Female Version-(PagalSongs.Com.IN).mp3',
    },
    {
      singer: 'Song 2',
      url: 'assets/Kudmayi-(Film-Version)(PaglaSongs).mp3',
    },
  ];

  trackPointer: number = 0;
  currentSong: Music = {
    singer: '',
    url: '',
  };

  play(index?: number): void {
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentSong = this.songs[0];
          this.audio.src = this.currentSong.url;
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentSong = this.songs[index];
      this.audio.src = this.currentSong.url;
      this.audio.play();
    }
  }
}
