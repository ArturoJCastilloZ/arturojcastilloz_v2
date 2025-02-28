import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css',
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class SkillsComponent {

    paths: any[] = [
        { src: 'ts', name: 'typescript' },
        { src: 'github', name: 'github' },
        { src: 'angular', name: 'angular' },
        { src: 'js', name: 'javascript' },
        { src: 'python', name: 'python' }
    ]

    public readonly _COMMON = inject(CommonService);
}
