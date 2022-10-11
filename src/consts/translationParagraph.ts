import { ITranslation } from '../interfaces';

export enum ELabels {
  FILES = 'files',
  SEARCH_ICON = 'search_icon',
  SOURCE_CODE_ICON = 'source_code_icon',
  ISSUES_ICON = 'issues_icon',
  EXTENSIONS_ICON = 'extensions_icon',
  CONTACT_ICON = 'contact_con',
  SETTING_ICON = 'setting_icon',
  MAIL_ICON = 'mail_icon',
  WORKSPACE = 'workspace',
  EXPLORER = 'explorer'
}

export const resources: ITranslation = {
  en: {
    translation: {
      [ELabels.FILES]: 'Files',
      [ELabels.SEARCH_ICON]: 'Search for me on github',
      [ELabels.SOURCE_CODE_ICON]: 'Project source code',
      [ELabels.ISSUES_ICON]: 'Log issues',
      [ELabels.EXTENSIONS_ICON]: 'Extensions',
      [ELabels.CONTACT_ICON]: 'Contact me via Linkedin',
      [ELabels.SETTING_ICON]: 'Setting',
      [ELabels.MAIL_ICON]: 'Contact me via Email',
      [ELabels.WORKSPACE]: 'Workspace',
      [ELabels.EXPLORER]: 'Explorer'
    }
  },
  vn: {
    translation: {
      [ELabels.FILES]: 'Thư mục',
      [ELabels.SEARCH_ICON]: 'Tài khoản của mình trên github',
      [ELabels.SOURCE_CODE_ICON]: 'Mã nguồn của dự án này',
      [ELabels.ISSUES_ICON]: 'Tạo vấn đề',
      [ELabels.EXTENSIONS_ICON]: 'Tiện ích mở rộng',
      [ELabels.CONTACT_ICON]: 'Liên lạc với mình qua Linkedin',
      [ELabels.SETTING_ICON]: 'Cài đặt',
      [ELabels.MAIL_ICON]: 'Liên hệ với mình qua gmail',
      [ELabels.WORKSPACE]: 'Không gian làm việc',
      [ELabels.EXPLORER]: 'Khám phá'
    }
  }
};
