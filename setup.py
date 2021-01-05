#!/usr/bin/env python3

"""The setup script."""

from setuptools import setup, find_packages

with open("README.md") as readme_file:
    readme = readme_file.read()

requirements = []

setup_requirements = ["pytest-runner"]

test_requirements = ["pytest"]

setup(
    author="Beshoy Abdelmalak",
    author_email="b.abdelmalak@greyrook.com",
    classifiers=[
        "Development Status :: 2 - Pre-Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Natural Language :: English",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
    ],
    description="Guideline on how to write code",
    entry_points={
        "console_scripts": [
            "check-lfs-files=pre_commit_hooks.check_lfs_files:main",
        ]
    },
    py_modules=[
        "pre_commit_hooks",
    ],
    install_requires=requirements,
    long_description=readme,
    long_description_content_type="text/markdown",
    include_package_data=True,
    keywords="code-with-style",
    name="code-with-style",
    packages=find_packages(),
    setup_requires=setup_requirements,
    test_suite="tests",
    tests_require=test_requirements,
    url="http://git.r0k.de/gr/guides/code-with-style",
    version="0.1.0",
    zip_safe=False,
)
