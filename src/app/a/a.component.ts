import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { Config } from '../config';
import { RequestBody } from '../request-body';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent {
  constructor(private service: ServiceService) {
    console.log('service4');
  }
  userInput: string = '';
   getURL: string ="";
   output:string[]=[];
  submitPrompt() {
    console.log('service5');
    const prompt: string = this.userInput;
    console.log(this.userInput);
    const updatedRequestBody: RequestBody = {
      version:
        'ad59ca21177f9e217b9075e7300cf6e14f7e5b4505b87b9689dbd866e9768969',
      input: {
        seed: 1,
        width: 512,
        height: 512,
        prompt: `mdjrny-v4 "${prompt}" 8k`, // Concatenate user input within quotes
        scheduler: 'DPMSolverMultistep',
        num_outputs: 1,
        guidance_scale: 7,
        prompt_strength: 0.8,
        num_inference_steps: 50,
      },
    };
    console.log('service3');
    this.service.postRequest(updatedRequestBody).subscribe(
      (response) => {
        // Handle the response here
        console.log('Response:', response);
        this.getURL = response.urls.get;
        console.log(this.getURL);
        this.get1(this.getURL);
      },
      (error) => {
        // Handle errors here
        console.error('Error:', error);
      }
    );
  }
  get1(url:string){
    this.service.getRequest(url).subscribe(
      (response)=>{
        console.log('Response:', response);
        this.output=response.output;
        console.log(this.output);
      },(error) => {
        // Handle errors here
        console.error('Error:', error);
      }
    );
    }
}
