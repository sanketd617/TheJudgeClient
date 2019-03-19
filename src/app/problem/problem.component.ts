import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ProblemService} from '../problem.service';
import {ActivatedRoute} from '@angular/router';
import {Problem} from '../problem';
import {DomSanitizer} from '@angular/platform-browser';
import {AceEditorComponent} from 'ng2-ace-editor';


@Pipe({ name: 'safeURL' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  problemNum = null;
  isLoading = true;
  problemTitle = null;
  problemTimeLimit = null;
  problemStatement = null;
  inputFormat = null;
  outputFormat = null;
  sampleInput = null;
  sampleOutput = null;

  statementVisible = false;
  inputFormatVisible = false;
  outputFormatVisible = false;
  sampleInputVisible = false;
  sampleOutputVisible = false;

  pdfView = false;
  pdfLink = null;

  code = '#!/bin/python';
  options = {
    enableLiveAutocompletion: true,
    fontSize: '1rem'
  };

  constructor(private route: ActivatedRoute, private problemService: ProblemService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.problemNum = this.route.snapshot.paramMap.get('number');
    this.loadProblem();

  }

  loadProblem() {
    this.isLoading = true;
    const self = this;
    this.problemService.getProblem(this.problemNum).subscribe((data: Problem) => {
      setTimeout(() => {
        self.problemTitle = data.title;
        self.problemTimeLimit = data.timeLimit;
        self.problemStatement = '<span class=\'red-text\'>Note: Problems may not be clear in this view. Also, images, if any, wont be displayed. Do check the PDF view.</span><br>' + data.statement + '<br><br>';
        self.isLoading = false;
        self.inputFormat = data.inputFormat + '<br><br>';
        self.outputFormat = data.outputFormat + '<br><br>';
        self.sampleInput = data.sampleInput + '<br><br>';
        self.sampleOutput = data.sampleOutput + '<br><br>';
        self.statementVisible = true;
        self.inputFormatVisible = true;
        self.outputFormatVisible = true;
        self.sampleInputVisible = true;
        self.sampleOutputVisible = true;
        const pnumBy100 = Math.trunc(self.problemNum / 100);
        self.pdfLink = `http://uva.onlinejudge.org/external/${pnumBy100}/p${self.problemNum}.pdf`;
      }, 1000);
    });
  }


  onCodeChange(event: any) {
    this.code = event;
  }
}
