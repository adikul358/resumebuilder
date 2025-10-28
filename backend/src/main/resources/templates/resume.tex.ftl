\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{
\vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\pdfgentounicode=1

% ---------- CUSTOM COMMANDS ----------
\newcommand{\resumeItem}[1]{%
\item\small{#1\vspace{-2pt}}%
}

\newcommand{\resumeSubheading}[4]{%
\vspace{-2pt}\item
\begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
\textbf{#1} & #3 \\
\textit{\small #2} & \textit{\small #4} \\
\end{tabular*}
}

\newcommand{\resumeProjectHeading}[2]{%
\item
\begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
\small #1 & #2 \\
\end{tabular*}
}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\vspace{-5pt}\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

% ------------------------------------
\begin{document}

{\centering
\textbf{\Huge \scshape ${(name)!}} \\ \vspace{1pt}
\small
\href{mailto:${(email)!}}{\underline{${(email)!}}}
<#if phone??>\,|\, ${(phone)!}</#if>
<#if linkedin??>\,|\, \,|\, \href{https://linkedin.com/in/${linkedin}}{\underline{linkedin/${linkedin}}}</#if>
<#if github??>\,|\, \,|\, \href{https://github.com/${github}}{\underline{github/${github}}}</#if>
}

%-----------EDUCATION-----------
\section{Education}
\resumeSubHeadingListStart
<#list education as edu>
    \resumeSubheading
    {${(edu.school)!}}
    {${(edu.degree)!}}
    {${(edu.start_month)!}/${(edu.start_year)!} -- ${(edu.end_month)!}/${(edu.end_year)!}}
    {${(edu.location)!}}\\
    {\small ${(edu.description?replace("\n", "\\\\"))!}}
</#list>
\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\section{Experience}
\resumeSubHeadingListStart
<#list experience as exp>
    \resumeSubheading
    {${(exp.company)!}}
    {${(exp.position)!}}
    {${(exp.start_month)!}/${(exp.start_year)!} -- ${(exp.end_month)!}/${(exp.end_year)!}}
    {${(exp.location)!}}\\
    <#if exp.details?? && exp.details?size gt 0>
        \resumeItemListStart
        <#list exp.details as detail>
            \resumeItem{${detail}}
        </#list>
        \resumeItemListEnd
    </#if>
</#list>
\resumeSubHeadingListEnd

%-----------PROJECTS (optional)-----------
<#if projects?? && projects?size gt 0>
    \section{Projects}
    \resumeSubHeadingListStart
    <#list projects as proj>
        \resumeProjectHeading
        {\textbf{${proj.name}} -- ${proj.description}}
        {${proj.year}}
    </#list>
    \resumeSubHeadingListEnd
</#if>

\end{document}
