export default function OnboardingProcess() {
  const steps = [
    {
      title: 'System Access Setup',
      description: 'Set up essential system access through proper channels.',
      items: [
        'Install Windows Remote Desktop by raising a ticket in Cognizant Service Portal (https://ctsccprod.service-now.com/ss?id=ss_home_page_servicenow)',
        'Request new AA staff number through AA Service Portal',
        'Raise ticket for password generation in AA Service Portal',
        'Request PPM Timesheet access for time tracking',
        'Request JIRA access through AA desktop',
        'Request AA SharePoint access through AA desktop'
      ]
    },
    {
      title: 'Onboarding Kit - Mandatory Training',
      description: 'Complete all required modules in sequence. Each module unlocks after completing the previous one.',
      modules: [
        {
          name: 'Module 1 - Account Handbook',
          description: 'Essential information about AA policies and procedures',
          items: ['Review and understand the AA Account Handbook']
        },
        {
          name: 'Module 2 - MSA Mandated Training',
          description: 'Mandatory training paths for MSA compliance',
          items: [
            'Complete MSA Mandated trainings learning path',
            'Complete MSA Training - Drugs and Alcohol Policy'
          ]
        },
        {
          name: 'Module 3 - PCI DSS Mandatory Training',
          description: 'Credit card security training',
          items: ['Complete Credit Card Security Basics (Course 530608)']
        }
      ]
    },
    {
      title: 'Essential Resources',
      description: 'Access and familiarize yourself with key platforms and documentation.',
      items: [
        'Access My Learning Studio through OneCognizant',
        'Review AA SharePoint Mandatory Documents',
        'Note: Each module unlocks after completing the previous one'
      ],
      links: [
        {
          title: 'AA SharePoint - Mandatory Documents',
          url: 'https://cognizantonline.sharepoint.com/sites/TheAA-Storehouse/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTheAA%2DStorehouse%2FShared%20Documents%2FAccount%20Compliance%2FAA%20Policy%20Docs%2FMSA%20Mandated&p=true&ga=1&ovuser=de08c407%2D19b9%2D427d%2D9fe8%2Dedf254300ca7%2C2333044%40cognizant%2Ecom&OR=Teams%2DHL&CT=1755019961616&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTA3MTcxNDgxMiIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D'
        }
      ]
    },
    {
      title: 'Important Links',
      description: 'Keep these links handy for reference.',
      links: [
        {
          title: 'My Learning Studio',
          url: 'https://onecognizant.cognizant.com/SAMLSSO/AuthServices/SignIn?ReturnUrl=%2FHome%3FGlobalAppID%3D1738%26URL%3Dhttps%3A%2F%2Fonecognizantazrapps.cognizant.com%2F1738%2FMLSApp%2FPathway%2Fviewpathway%3Fpage%3D7684'
        },
        {
          title: 'Cognizant Service Portal',
          url: 'https://ctsccprod.service-now.com/ss?id=ss_home_page_servicenow'
        }
      ]
    }
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-aa-blue dark:text-aa-yellow mb-8 text-center">
        Onboarding Process
      </h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <div key={step.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-aa-blue dark:bg-aa-yellow text-white dark:text-aa-dark rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-aa-blue dark:text-aa-yellow mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                
                {step.items && (
                  <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                    {step.items.map((item) => (
                      <li key={item} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}

                {step.modules && (
                  <div className="space-y-6 mt-4">
                    {step.modules.map((module, moduleIndex) => (
                      <div key={module.name} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="text-lg font-medium text-aa-blue dark:text-aa-yellow mb-2 flex items-center justify-between">
                          {module.name}
                          <a
                            href="https://onecognizant.cognizant.com/SAMLSSO/AuthServices/SignIn?ReturnUrl=%2FHome%3FGlobalAppID%3D1738%26URL%3Dhttps%3A%2F%2Fonecognizantazrapps.cognizant.com%2F1738%2FMLSApp%2FPathway%2Fviewpathway%3Fpage%3D7684"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-aa-blue dark:text-aa-yellow hover:underline flex items-center gap-1"
                          >
                            Access Module
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{module.description}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          {module.items.map((item) => (
                            <li key={item} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {step.links && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-aa-blue dark:text-aa-yellow">Quick Links:</h4>
                    <ul className="space-y-2">
                      {step.links.map((link) => (
                        <li key={link.title}>
                          <a 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-aa-blue dark:text-aa-yellow hover:underline flex items-center gap-1"
                          >
                            {link.title}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {index === 1 && (
                  <div className="mt-4 bg-blue-50 dark:bg-blue-900/50 border-l-4 border-blue-400 p-4">
                    <p className="text-blue-700 dark:text-blue-300">
                      <strong>Important:</strong> Modules are sequential - you must complete each module to unlock the next one.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 