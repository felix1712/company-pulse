import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { NouiFormatter } from 'ng2-nouislider';
import {
  OnClickEvent,
  starRatingPosition,
} from 'angular-star-rating';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  labelPositionOptions: Array<starRatingPosition | string> = ['top', 'right', 'left', 'bottom'];
  public starForm: FormGroup;
  public form1: FormGroup;
  showSelected : boolean;
  showQuestion1: boolean;
  showQuestion2: boolean;
  showQuestion3: boolean;
  showQuestion4: boolean;
  showFeedbackQuestion: boolean;
  showFeedbackForm: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.showSelected = false;
    this.showQuestion1 = true;
    this.showQuestion2 = false;
    this.showQuestion2 = false;
    this.showQuestion3 = false;
    this.showQuestion4 = false;
    this.showFeedbackQuestion = false;
    this.showFeedbackForm = false;
  }

  PrevButton(){
    var question1 = $('#question-1').length;
    var question2 = $('#question-2').length;
    var question3 = $('#question-3').length;
    var question4 = $('#question-4').length;
    var feedbackQuestion = $('#feedback-question').length;
    if(question1 > 0){
      $('.prev-button').addClass('disabled-link');
    }

    if(question2 > 0){
      this.showQuestion1 = true;
      this.showQuestion2 = false;
      $('.prev-button').removeClass('disabled-link');
    }

    if(question3 > 0){
      this.showQuestion2 = true;
      this.showQuestion3 = false;
      $('.prev-button').removeClass('disabled-link');
    }

    if(question4 > 0){
      this.showQuestion3 = true;
      this.showQuestion4 = false;
      $('.prev-button').removeClass('disabled-link');
    }

  }
  ConfirmButton(){
    var question1 = $('#question-1').length;
    var question2 = $('#question-2').length;
    var question3 = $('#question-3').length;
    var question4 = $('#question-4').length;
    var feedbackQuestion = $('#feedback-question').length;
    if(question1 > 0){
      this.showQuestion1 = false;
      this.showQuestion2 = true;
    }

    if(question2 > 0){
      this.showQuestion2 = false;
      this.showQuestion3 = true;
      $('.prev-button').removeClass('disabled-link');
    }

    if(question3 > 0){
      this.showQuestion3 = false;
      this.showQuestion4 = true;
      $('.prev-button').removeClass('disabled-link');
    }

    if(question4 > 0){
      this.showFeedbackQuestion= true;
      this.showQuestion4 = false;
      $('.prev-button').removeClass('disabled-link');
    }

    if(feedbackQuestion > 0){
      this.showFeedbackForm = true;
      this.showFeedbackQuestion = false;
      $('.prev-button').removeClass('disabled-link');
    }
  }

public ngOnInit () {
    this.setupForm();
    this.form1 = this.formBuilder.group({ 'single': [ 0 ] });
  }


  setupForm() {
    this.starForm = this.formBuilder.group({
      labelText: ['Great'],
      labelPosition: ['bottom'],
    });
  }

  sliderConfig: any = {
    start: [20, 80],
    connect: [true, false],
    margin: 1,
    step: 1,
    range: {
      min: 0,
      max: 10
    },
    pips: {
      mode: 'steps',
      density: 10
    }
  };

  onClick($event: OnClickEvent): void {
    console.log('single onClick rating: ', $event.rating);
  }

  onUpdate(event) {
    
    if(event == 1){
      $('.noUi-connect').css('background', '#e53600');
    } else if (event == 2){
      $('.noUi-connect').css('background', '#e35f03');
    } else if (event == 3){
      $('.noUi-connect').css('background', '#e18607');
    } else if (event == 4){
      $('.noUi-connect').css('background', '#dfab0b');
    } else if (event == 5){
      $('.noUi-connect').css('background', '#ddce0f');
    } else if (event == 6){
      $('.noUi-connect').css('background', '#c6db13');
    } else if (event == 7){
      $('.noUi-connect').css('background', '#a3d916');
    } else if (event == 8){
      $('.noUi-connect').css('background', '#81d71a');
    } else if (event == 9){
      $('.noUi-connect').css('background', '#62d41d');
    } else if (event == 10){
      $('.noUi-connect').css('background', '#3dcc18');
    }
  }

  onEnd(event) {
    $('.noUi-handle').addClass('noUi-end')
  }

}
